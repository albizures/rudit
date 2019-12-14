import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const руководить: PerfectVerb = {
  name: Word('руководить', 7),
  singular1stPerson: Word('руковожу', 7),
  singular2ndPerson: Word('руководишь', 7),
  singular3rdPerson: Word('руководит', 7),
  plural1stPerson: Word('руководим', 7),
  plural2ndPerson: Word('руководите', 7),
  plural3rdPerson: Word('руководят', 7),
  masculinePast: Word('руководил', 7),
  femininePast: Word('руководила', 7),
  neuterPast: Word('руководило', 7),
  pluralPast: Word('руководили', 7),
  imperativeInformal: Word('руководи', 7),
  imperativeFormal: Word('руководите', 7),
  imperfect: [],
};

perfectVerbs.set(руководить.name.text, руководить);

export { руководить };
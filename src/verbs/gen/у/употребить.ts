import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const употребить: PerfectVerb = {
  name: Word('употребить', 7),
  singular1stPerson: Word('употреблю', 8),
  singular2ndPerson: Word('употребишь', 7),
  singular3rdPerson: Word('употребит', 7),
  plural1stPerson: Word('употребим', 7),
  plural2ndPerson: Word('употребите', 7),
  plural3rdPerson: Word('употребят', 7),
  masculinePast: Word('употребил', 7),
  femininePast: Word('употребила', 7),
  neuterPast: Word('употребило', 7),
  pluralPast: Word('употребили', 7),
  imperativeInformal: Word('употреби', 7),
  imperativeFormal: Word('употребите', 7),
  imperfect: ['употреблять'],
};

perfectVerbs.set(употребить.name.text, употребить);

export { употребить };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронзить: PerfectVerb = {
  name: Word('пронзить', 5),
  singular1stPerson: Word('пронжу', 5),
  singular2ndPerson: Word('пронзишь', 5),
  singular3rdPerson: Word('пронзит', 5),
  plural1stPerson: Word('пронзим', 5),
  plural2ndPerson: Word('пронзите', 5),
  plural3rdPerson: Word('пронзят', 5),
  masculinePast: Word('пронзил', 5),
  femininePast: Word('пронзила', 5),
  neuterPast: Word('пронзило', 5),
  pluralPast: Word('пронзили', 5),
  imperativeInformal: Word('пронзи', 5),
  imperativeFormal: Word('пронзите', 5),
  imperfect: [],
};

perfectVerbs.set(пронзить.name.text, пронзить);

export { пронзить };
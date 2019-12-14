import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исполнить: PerfectVerb = {
  name: Word('исполнить', 3),
  singular1stPerson: Word('исполню', 3),
  singular2ndPerson: Word('исполнишь', 3),
  singular3rdPerson: Word('исполнит', 3),
  plural1stPerson: Word('исполним', 3),
  plural2ndPerson: Word('исполните', 3),
  plural3rdPerson: Word('исполнят', 3),
  masculinePast: Word('исполнил', 3),
  femininePast: Word('исполнила', 3),
  neuterPast: Word('исполнило', 3),
  pluralPast: Word('исполнили', 3),
  imperativeInformal: Word('исполни', 3),
  imperativeFormal: Word('исполните', 3),
  imperfect: ['исполнять'],
};

perfectVerbs.set(исполнить.name.text, исполнить);

export { исполнить };
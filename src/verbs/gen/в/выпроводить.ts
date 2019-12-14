import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпроводить: PerfectVerb = {
  name: Word('выпроводить', 1),
  singular1stPerson: Word('выпровожу', 1),
  singular2ndPerson: Word('выпроводишь', 1),
  singular3rdPerson: Word('выпроводит', 1),
  plural1stPerson: Word('выпроводим', 1),
  plural2ndPerson: Word('выпроводите', 1),
  plural3rdPerson: Word('выпроводят', 1),
  masculinePast: Word('выпроводил', 1),
  femininePast: Word('выпроводила', 1),
  neuterPast: Word('выпроводило', 1),
  pluralPast: Word('выпроводили', 1),
  imperativeInformal: Word('выпроводи', 1),
  imperativeFormal: Word('выпроводите', 1),
  imperfect: [],
};

perfectVerbs.set(выпроводить.name.text, выпроводить);

export { выпроводить };
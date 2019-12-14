import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмывать: PerfectVerb = {
  name: Word('отмывать', 5),
  singular1stPerson: Word('отмываю', 5),
  singular2ndPerson: Word('отмываешь', 5),
  singular3rdPerson: Word('отмывает', 5),
  plural1stPerson: Word('отмываем', 5),
  plural2ndPerson: Word('отмываете', 5),
  plural3rdPerson: Word('отмывают', 5),
  masculinePast: Word('отмывал', 5),
  femininePast: Word('отмывала', 5),
  neuterPast: Word('отмывало', 5),
  pluralPast: Word('отмывали', 5),
  imperativeInformal: Word('отмывай', 5),
  imperativeFormal: Word('отмывайте', 5),
  imperfect: [],
};

perfectVerbs.set(отмывать.name.text, отмывать);

export { отмывать };
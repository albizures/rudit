import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышить: PerfectVerb = {
  name: Word('вышить', 1),
  singular1stPerson: Word('вышью', 1),
  singular2ndPerson: Word('вышьешь', 1),
  singular3rdPerson: Word('вышьет', 1),
  plural1stPerson: Word('вышьем', 1),
  plural2ndPerson: Word('вышьете', 1),
  plural3rdPerson: Word('вышьют', 1),
  masculinePast: Word('вышил', 1),
  femininePast: Word('вышила', 1),
  neuterPast: Word('вышило', 1),
  pluralPast: Word('вышили', 1),
  imperativeInformal: Word('вышей', 1),
  imperativeFormal: Word('вышейте', 1),
  imperfect: [],
};

perfectVerbs.set(вышить.name.text, вышить);

export { вышить };
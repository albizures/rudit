import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отражать: PerfectVerb = {
  name: Word('отражать', 5),
  singular1stPerson: Word('отражаю', 5),
  singular2ndPerson: Word('отражаешь', 5),
  singular3rdPerson: Word('отражает', 5),
  plural1stPerson: Word('отражаем', 5),
  plural2ndPerson: Word('отражаете', 5),
  plural3rdPerson: Word('отражают', 5),
  masculinePast: Word('отражатл', 5),
  femininePast: Word('отражатла', 5),
  neuterPast: Word('отражатло', 5),
  pluralPast: Word('отражатли', 5),
  imperativeInformal: Word('отражатй', 5),
  imperativeFormal: Word('отражатйте', 5),
  imperfect: ['отразить'],
};

perfectVerbs.set(отражать.name.text, отражать);

export { отражать };
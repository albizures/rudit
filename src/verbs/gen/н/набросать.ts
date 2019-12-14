import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набросать: PerfectVerb = {
  name: Word('набросать', 6),
  singular1stPerson: Word('набросаю', 6),
  singular2ndPerson: Word('набросаешь', 6),
  singular3rdPerson: Word('набросает', 6),
  plural1stPerson: Word('набросаем', 6),
  plural2ndPerson: Word('набросаете', 6),
  plural3rdPerson: Word('набросают', 6),
  masculinePast: Word('набросал', 6),
  femininePast: Word('набросала', 6),
  neuterPast: Word('набросало', 6),
  pluralPast: Word('набросали', 6),
  imperativeInformal: Word('набросай', 6),
  imperativeFormal: Word('набросайте', 6),
  imperfect: [],
};

perfectVerbs.set(набросать.name.text, набросать);

export { набросать };
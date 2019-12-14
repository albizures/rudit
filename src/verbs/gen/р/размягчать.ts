import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размягчать: PerfectVerb = {
  name: Word('размягчать', 7),
  singular1stPerson: Word('размягчаю', 7),
  singular2ndPerson: Word('размягчаешь', 7),
  singular3rdPerson: Word('размягчает', 7),
  plural1stPerson: Word('размягчаем', 7),
  plural2ndPerson: Word('размягчаете', 7),
  plural3rdPerson: Word('размягчают', 7),
  masculinePast: Word('размягчал', 7),
  femininePast: Word('размягчала', 7),
  neuterPast: Word('размягчало', 7),
  pluralPast: Word('размягчали', 7),
  imperativeInformal: Word('размягчай', 7),
  imperativeFormal: Word('размягчайте', 7),
  imperfect: [],
};

perfectVerbs.set(размягчать.name.text, размягчать);

export { размягчать };
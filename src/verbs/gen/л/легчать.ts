import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const легчать: PerfectVerb = {
  name: Word('легчать', 4),
  singular1stPerson: Word('легчаю', 4),
  singular2ndPerson: Word('легчаешь', 4),
  singular3rdPerson: Word('легчает', 4),
  plural1stPerson: Word('легчаем', 4),
  plural2ndPerson: Word('легчаете', 4),
  plural3rdPerson: Word('легчают', 4),
  masculinePast: Word('легчал', 4),
  femininePast: Word('легчала', 4),
  neuterPast: Word('легчало', 4),
  pluralPast: Word('легчали', 4),
  imperativeInformal: Word('легчай', 4),
  imperativeFormal: Word('легчайте', 4),
  imperfect: [],
};

perfectVerbs.set(легчать.name.text, легчать);

export { легчать };
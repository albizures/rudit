import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заарканивать: PerfectVerb = {
  name: Word('заарканивать', 5),
  singular1stPerson: Word('заарканиваю', 5),
  singular2ndPerson: Word('заарканиваешь', 5),
  singular3rdPerson: Word('заарканивает', 5),
  plural1stPerson: Word('заарканиваем', 5),
  plural2ndPerson: Word('заарканиваете', 5),
  plural3rdPerson: Word('заарканивают', 5),
  masculinePast: Word('заарканивал', 5),
  femininePast: Word('заарканивала', 5),
  neuterPast: Word('заарканивало', 5),
  pluralPast: Word('заарканивали', 5),
  imperativeInformal: Word('заарканивай', 5),
  imperativeFormal: Word('заарканивайте', 5),
  imperfect: [],
};

perfectVerbs.set(заарканивать.name.text, заарканивать);

export { заарканивать };
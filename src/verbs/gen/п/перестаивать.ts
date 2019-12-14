import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестаивать: PerfectVerb = {
  name: Word('перестаивать', 6),
  singular1stPerson: Word('перестаиваю', 6),
  singular2ndPerson: Word('перестаиваешь', 6),
  singular3rdPerson: Word('перестаивает', 6),
  plural1stPerson: Word('перестаиваем', 6),
  plural2ndPerson: Word('перестаиваете', 6),
  plural3rdPerson: Word('перестаивают', 6),
  masculinePast: Word('перестаивал', 6),
  femininePast: Word('перестаивала', 6),
  neuterPast: Word('перестаивало', 6),
  pluralPast: Word('перестаивали', 6),
  imperativeInformal: Word('перестаивай', 6),
  imperativeFormal: Word('перестаивайте', 6),
  imperfect: [],
};

perfectVerbs.set(перестаивать.name.text, перестаивать);

export { перестаивать };
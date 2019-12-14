import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очеловечивать: PerfectVerb = {
  name: Word('очеловечивать', 6),
  singular1stPerson: Word('очеловечиваю', 6),
  singular2ndPerson: Word('очеловечиваешь', 6),
  singular3rdPerson: Word('очеловечивает', 6),
  plural1stPerson: Word('очеловечиваем', 6),
  plural2ndPerson: Word('очеловечиваете', 6),
  plural3rdPerson: Word('очеловечивают', 6),
  masculinePast: Word('очеловечивал', 6),
  femininePast: Word('очеловечивала', 6),
  neuterPast: Word('очеловечивало', 6),
  pluralPast: Word('очеловечивали', 6),
  imperativeInformal: Word('очеловечивай', 6),
  imperativeFormal: Word('очеловечивайте', 6),
  imperfect: [],
};

perfectVerbs.set(очеловечивать.name.text, очеловечивать);

export { очеловечивать };
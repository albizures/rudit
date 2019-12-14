import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепрыгивать: PerfectVerb = {
  name: Word('перепрыгивать', 6),
  singular1stPerson: Word('перепрыгиваю', 6),
  singular2ndPerson: Word('перепрыгиваешь', 6),
  singular3rdPerson: Word('перепрыгивает', 6),
  plural1stPerson: Word('перепрыгиваем', 6),
  plural2ndPerson: Word('перепрыгиваете', 6),
  plural3rdPerson: Word('перепрыгивают', 6),
  masculinePast: Word('перепрыгивал', 6),
  femininePast: Word('перепрыгивала', 6),
  neuterPast: Word('перепрыгивало', 6),
  pluralPast: Word('перепрыгивали', 6),
  imperativeInformal: Word('перепрыгивай', 6),
  imperativeFormal: Word('перепрыгивайте', 6),
  imperfect: ['перепрыгнуть'],
};

perfectVerbs.set(перепрыгивать.name.text, перепрыгивать);

export { перепрыгивать };
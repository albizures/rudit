import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распатронивать: PerfectVerb = {
  name: Word('распатронивать', 7),
  singular1stPerson: Word('распатрониваю', 7),
  singular2ndPerson: Word('распатрониваешь', 7),
  singular3rdPerson: Word('распатронивает', 7),
  plural1stPerson: Word('распатрониваем', 7),
  plural2ndPerson: Word('распатрониваете', 7),
  plural3rdPerson: Word('распатронивают', 7),
  masculinePast: Word('распатронивал', 7),
  femininePast: Word('распатронивала', 7),
  neuterPast: Word('распатронивало', 7),
  pluralPast: Word('распатронивали', 7),
  imperativeInformal: Word('распатронивай', 7),
  imperativeFormal: Word('распатронивайте', 7),
  imperfect: [],
};

perfectVerbs.set(распатронивать.name.text, распатронивать);

export { распатронивать };
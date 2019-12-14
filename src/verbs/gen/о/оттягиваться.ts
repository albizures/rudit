import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттягиваться: PerfectVerb = {
  name: Word('оттягиваться', 3),
  singular1stPerson: Word('оттягиваюсь', 3),
  singular2ndPerson: Word('оттягиваешься', 3),
  singular3rdPerson: Word('оттягивается', 3),
  plural1stPerson: Word('оттягиваемся', 3),
  plural2ndPerson: Word('оттягиваетесь', 3),
  plural3rdPerson: Word('оттягиваются', 3),
  masculinePast: Word('оттягивался', 3),
  femininePast: Word('оттягивалась', 3),
  neuterPast: Word('оттягивалось', 3),
  pluralPast: Word('оттягивались', 3),
  imperativeInformal: Word('оттягивайся', 3),
  imperativeFormal: Word('оттягивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(оттягиваться.name.text, оттягиваться);

export { оттягиваться };
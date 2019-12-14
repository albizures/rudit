import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упорядочиваться: PerfectVerb = {
  name: Word('упорядочиваться', 4),
  singular1stPerson: Word('упорядочиваюсь', 4),
  singular2ndPerson: Word('упорядочиваешься', 4),
  singular3rdPerson: Word('упорядочивается', 4),
  plural1stPerson: Word('упорядочиваемся', 4),
  plural2ndPerson: Word('упорядочиваетесь', 4),
  plural3rdPerson: Word('упорядочиваются', 4),
  masculinePast: Word('упорядочивался', 4),
  femininePast: Word('упорядочивалась', 4),
  neuterPast: Word('упорядочивалось', 4),
  pluralPast: Word('упорядочивались', 4),
  imperativeInformal: Word('упорядочивайся', 4),
  imperativeFormal: Word('упорядочивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(упорядочиваться.name.text, упорядочиваться);

export { упорядочиваться };
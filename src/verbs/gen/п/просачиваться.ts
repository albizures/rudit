import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просачиваться: PerfectVerb = {
  name: Word('просачиваться', 4),
  singular1stPerson: Word('просачиваюсь', 4),
  singular2ndPerson: Word('просачиваешься', 4),
  singular3rdPerson: Word('просачивается', 4),
  plural1stPerson: Word('просачиваемся', 4),
  plural2ndPerson: Word('просачиваетесь', 4),
  plural3rdPerson: Word('просачиваются', 4),
  masculinePast: Word('просачивался', 4),
  femininePast: Word('просачивалась', 4),
  neuterPast: Word('просачивалось', 4),
  pluralPast: Word('просачивались', 4),
  imperativeInformal: Word('просачивайся', 4),
  imperativeFormal: Word('просачивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(просачиваться.name.text, просачиваться);

export { просачиваться };
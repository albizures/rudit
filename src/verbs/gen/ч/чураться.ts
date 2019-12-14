import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чураться: PerfectVerb = {
  name: Word('чураться', 3),
  singular1stPerson: Word('чураюсь', 3),
  singular2ndPerson: Word('чураешься', 3),
  singular3rdPerson: Word('чурается', 3),
  plural1stPerson: Word('чураемся', 3),
  plural2ndPerson: Word('чураетесь', 3),
  plural3rdPerson: Word('чураются', 3),
  masculinePast: Word('чурался', 3),
  femininePast: Word('чуралась', 3),
  neuterPast: Word('чуралось', 3),
  pluralPast: Word('чурались', 3),
  imperativeInformal: Word('чурайся', 3),
  imperativeFormal: Word('чурайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(чураться.name.text, чураться);

export { чураться };
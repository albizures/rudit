import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преобразовываться: PerfectVerb = {
  name: Word('преобразовываться', 8),
  singular1stPerson: Word('преобразовываюсь', 8),
  singular2ndPerson: Word('преобразовываешься', 8),
  singular3rdPerson: Word('преобразовывается', 8),
  plural1stPerson: Word('преобразовываемся', 8),
  plural2ndPerson: Word('преобразовываетесь', 8),
  plural3rdPerson: Word('преобразовываются', 8),
  masculinePast: Word('преобразовывался', 8),
  femininePast: Word('преобразовывалась', 8),
  neuterPast: Word('преобразовывалось', 8),
  pluralPast: Word('преобразовывались', 8),
  imperativeInformal: Word('преобразовывайся', 8),
  imperativeFormal: Word('преобразовывайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(преобразовываться.name.text, преобразовываться);

export { преобразовываться };
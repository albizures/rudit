import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согласовываться: PerfectVerb = {
  name: Word('согласовываться', 6),
  singular1stPerson: Word('согласовываюсь', 6),
  singular2ndPerson: Word('согласовываешься', 6),
  singular3rdPerson: Word('согласовывается', 6),
  plural1stPerson: Word('согласовываемся', 6),
  plural2ndPerson: Word('согласовываетесь', 6),
  plural3rdPerson: Word('согласовываются', 6),
  masculinePast: Word('согласовывался', 6),
  femininePast: Word('согласовывалась', 6),
  neuterPast: Word('согласовывалось', 6),
  pluralPast: Word('согласовывались', 6),
  imperativeInformal: Word('согласовывайся', 6),
  imperativeFormal: Word('согласовывайтесь', 6),
  imperfect: ['согласоваться'],
};

perfectVerbs.set(согласовываться.name.text, согласовываться);

export { согласовываться };
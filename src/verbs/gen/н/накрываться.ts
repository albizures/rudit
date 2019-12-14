import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрываться: PerfectVerb = {
  name: Word('накрываться', 6),
  singular1stPerson: Word('накрываюсь', 6),
  singular2ndPerson: Word('накрываешься', 6),
  singular3rdPerson: Word('накрывается', 6),
  plural1stPerson: Word('накрываемся', 6),
  plural2ndPerson: Word('накрываетесь', 6),
  plural3rdPerson: Word('накрываются', 6),
  masculinePast: Word('накрывался', 6),
  femininePast: Word('накрывалась', 6),
  neuterPast: Word('накрывалось', 6),
  pluralPast: Word('накрывались', 6),
  imperativeInformal: Word('накрывайся', 6),
  imperativeFormal: Word('накрывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(накрываться.name.text, накрываться);

export { накрываться };
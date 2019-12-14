import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проигрываться: PerfectVerb = {
  name: Word('проигрываться', 3),
  singular1stPerson: Word('проигрываюсь', 3),
  singular2ndPerson: Word('проигрываешься', 3),
  singular3rdPerson: Word('проигрывается', 3),
  plural1stPerson: Word('проигрываемся', 3),
  plural2ndPerson: Word('проигрываетесь', 3),
  plural3rdPerson: Word('проигрываются', 3),
  masculinePast: Word('проигрывался', 3),
  femininePast: Word('проигрывалась', 3),
  neuterPast: Word('проигрывалось', 3),
  pluralPast: Word('проигрывались', 3),
  imperativeInformal: Word('проигрывайся', 3),
  imperativeFormal: Word('проигрывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(проигрываться.name.text, проигрываться);

export { проигрываться };
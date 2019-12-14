import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заигрываться: PerfectVerb = {
  name: Word('заигрываться', 2),
  singular1stPerson: Word('заигрываюсь', 2),
  singular2ndPerson: Word('заигрываешься', 2),
  singular3rdPerson: Word('заигрывается', 2),
  plural1stPerson: Word('заигрываемся', 2),
  plural2ndPerson: Word('заигрываетесь', 2),
  plural3rdPerson: Word('заигрываются', 2),
  masculinePast: Word('заигрывался', 2),
  femininePast: Word('заигрывалась', 2),
  neuterPast: Word('заигрывалось', 2),
  pluralPast: Word('заигрывались', 2),
  imperativeInformal: Word('заигрывайся', 2),
  imperativeFormal: Word('заигрывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(заигрываться.name.text, заигрываться);

export { заигрываться };
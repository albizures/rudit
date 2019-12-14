import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накатываться: PerfectVerb = {
  name: Word('накатываться', 3),
  singular1stPerson: Word('накатываюсь', 3),
  singular2ndPerson: Word('накатываешься', 3),
  singular3rdPerson: Word('накатывается', 3),
  plural1stPerson: Word('накатываемся', 3),
  plural2ndPerson: Word('накатываетесь', 3),
  plural3rdPerson: Word('накатываются', 3),
  masculinePast: Word('накатывался', 3),
  femininePast: Word('накатывалась', 3),
  neuterPast: Word('накатывалось', 3),
  pluralPast: Word('накатывались', 3),
  imperativeInformal: Word('накатывайся', 3),
  imperativeFormal: Word('накатывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(накатываться.name.text, накатываться);

export { накатываться };
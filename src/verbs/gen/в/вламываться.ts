import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вламываться: PerfectVerb = {
  name: Word('вламываться', 2),
  singular1stPerson: Word('вламываюсь', 2),
  singular2ndPerson: Word('вламываешься', 2),
  singular3rdPerson: Word('вламывается', 2),
  plural1stPerson: Word('вламываемся', 2),
  plural2ndPerson: Word('вламываетесь', 2),
  plural3rdPerson: Word('вламываются', 2),
  masculinePast: Word('вламывался', 2),
  femininePast: Word('вламывалась', 2),
  neuterPast: Word('вламывалось', 2),
  pluralPast: Word('вламывались', 2),
  imperativeInformal: Word('вламывайся', 2),
  imperativeFormal: Word('вламывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вламываться.name.text, вламываться);

export { вламываться };
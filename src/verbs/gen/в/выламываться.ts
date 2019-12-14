import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выламываться: PerfectVerb = {
  name: Word('выламываться', 3),
  singular1stPerson: Word('выламываюсь', 3),
  singular2ndPerson: Word('выламываешься', 3),
  singular3rdPerson: Word('выламывается', 3),
  plural1stPerson: Word('выламываемся', 3),
  plural2ndPerson: Word('выламываетесь', 3),
  plural3rdPerson: Word('выламываются', 3),
  masculinePast: Word('выламывался', 3),
  femininePast: Word('выламывалась', 3),
  neuterPast: Word('выламывалось', 3),
  pluralPast: Word('выламывались', 3),
  imperativeInformal: Word('выламывайся', 3),
  imperativeFormal: Word('выламывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выламываться.name.text, выламываться);

export { выламываться };
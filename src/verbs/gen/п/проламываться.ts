import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проламываться: PerfectVerb = {
  name: Word('проламываться', 4),
  singular1stPerson: Word('проламываюсь', 4),
  singular2ndPerson: Word('проламываешься', 4),
  singular3rdPerson: Word('проламывается', 4),
  plural1stPerson: Word('проламываемся', 4),
  plural2ndPerson: Word('проламываетесь', 4),
  plural3rdPerson: Word('проламываются', 4),
  masculinePast: Word('проламывался', 4),
  femininePast: Word('проламывалась', 4),
  neuterPast: Word('проламывалось', 4),
  pluralPast: Word('проламывались', 4),
  imperativeInformal: Word('проламывайся', 4),
  imperativeFormal: Word('проламывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(проламываться.name.text, проламываться);

export { проламываться };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагружаться: PerfectVerb = {
  name: Word('нагружаться', 6),
  singular1stPerson: Word('нагружаюсь', 6),
  singular2ndPerson: Word('нагружаешься', 6),
  singular3rdPerson: Word('нагружается', 6),
  plural1stPerson: Word('нагружаемся', 6),
  plural2ndPerson: Word('нагружаетесь', 6),
  plural3rdPerson: Word('нагружаются', 6),
  masculinePast: Word('нагружался', 6),
  femininePast: Word('нагружалась', 6),
  neuterPast: Word('нагружалось', 6),
  pluralPast: Word('нагружались', 6),
  imperativeInformal: Word('нагружайся', 6),
  imperativeFormal: Word('нагружайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(нагружаться.name.text, нагружаться);

export { нагружаться };
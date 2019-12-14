import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарекаться: PerfectVerb = {
  name: Word('нарекаться', 5),
  singular1stPerson: Word('нарекаюсь', 5),
  singular2ndPerson: Word('нарекаешься', 5),
  singular3rdPerson: Word('нарекается', 5),
  plural1stPerson: Word('нарекаемся', 5),
  plural2ndPerson: Word('нарекаетесь', 5),
  plural3rdPerson: Word('нарекаются', 5),
  masculinePast: Word('нарекался', 5),
  femininePast: Word('нарекалась', 5),
  neuterPast: Word('нарекалось', 5),
  pluralPast: Word('нарекались', 5),
  imperativeInformal: Word('нарекайся', 5),
  imperativeFormal: Word('нарекайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(нарекаться.name.text, нарекаться);

export { нарекаться };
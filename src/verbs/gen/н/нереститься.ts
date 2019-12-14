import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нереститься: PerfectVerb = {
  name: Word('нереститься', 6),
  singular1stPerson: Word('нерещусь', 5),
  singular2ndPerson: Word('нерестишься', 6),
  singular3rdPerson: Word('нерестится', 6),
  plural1stPerson: Word('нерестимся', 6),
  plural2ndPerson: Word('нереститесь', 6),
  plural3rdPerson: Word('нерестятся', 6),
  masculinePast: Word('нерестился', 6),
  femininePast: Word('нерестилась', 6),
  neuterPast: Word('нерестилось', 6),
  pluralPast: Word('нерестились', 6),
  imperativeInformal: Word('нерестись', 6),
  imperativeFormal: Word('нереститесь', 6),
  imperfect: [],
};

perfectVerbs.set(нереститься.name.text, нереститься);

export { нереститься };
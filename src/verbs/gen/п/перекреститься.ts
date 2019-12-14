import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекреститься: PerfectVerb = {
  name: Word('перекреститься', 9),
  singular1stPerson: Word('перекрещусь', 8),
  singular2ndPerson: Word('перекрестишься', 6),
  singular3rdPerson: Word('перекрестится', 6),
  plural1stPerson: Word('перекрестимся', 6),
  plural2ndPerson: Word('перекреститесь', 6),
  plural3rdPerson: Word('перекрестятся', 6),
  masculinePast: Word('перекрестился', 9),
  femininePast: Word('перекрестилась', 9),
  neuterPast: Word('перекрестилось', 9),
  pluralPast: Word('перекрестились', 9),
  imperativeInformal: Word('перекрестись', 9),
  imperativeFormal: Word('перекреститесь', 9),
  imperfect: [],
};

perfectVerbs.set(перекреститься.name.text, перекреститься);

export { перекреститься };
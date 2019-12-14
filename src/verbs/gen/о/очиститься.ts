import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очиститься: PerfectVerb = {
  name: Word('очиститься', 2),
  singular1stPerson: Word('очищусь', 2),
  singular2ndPerson: Word('очистишься', 2),
  singular3rdPerson: Word('очистится', 2),
  plural1stPerson: Word('очистимся', 2),
  plural2ndPerson: Word('очиститесь', 2),
  plural3rdPerson: Word('очистятся', 2),
  masculinePast: Word('очистился', 2),
  femininePast: Word('очистилась', 2),
  neuterPast: Word('очистилось', 2),
  pluralPast: Word('очистились', 2),
  imperativeInformal: Word('очистись//очи'сться', 2),
  imperativeFormal: Word('очи'ститесь//о'чи'стьтесь', 0),
  imperfect: [],
};

perfectVerbs.set(очиститься.name.text, очиститься);

export { очиститься };
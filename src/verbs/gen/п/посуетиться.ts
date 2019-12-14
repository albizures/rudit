import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посуетиться: PerfectVerb = {
  name: Word('посуетиться', 6),
  singular1stPerson: Word('посуечусь', 6),
  singular2ndPerson: Word('посуетишься', 6),
  singular3rdPerson: Word('посуетится', 6),
  plural1stPerson: Word('посуетимся', 6),
  plural2ndPerson: Word('посуетитесь', 6),
  plural3rdPerson: Word('посуетятся', 6),
  masculinePast: Word('посуетился', 6),
  femininePast: Word('посуетилась', 6),
  neuterPast: Word('посуетилось', 6),
  pluralPast: Word('посуетились', 6),
  imperativeInformal: Word('посуетись', 6),
  imperativeFormal: Word('посуетитесь', 6),
  imperfect: [],
};

perfectVerbs.set(посуетиться.name.text, посуетиться);

export { посуетиться };
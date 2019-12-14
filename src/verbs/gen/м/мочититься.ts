import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мочититься: PerfectVerb = {
  name: Word('мочититься', 5),
  singular1stPerson: Word('мочичусь', 5),
  singular2ndPerson: Word('мочитишься', 3),
  singular3rdPerson: Word('мочитится', 3),
  plural1stPerson: Word('мочитимся', 3),
  plural2ndPerson: Word('мочититесь', 3),
  plural3rdPerson: Word('мочитятся', 3),
  masculinePast: Word('мочитился', 5),
  femininePast: Word('мочитилась', 5),
  neuterPast: Word('мочитилось', 5),
  pluralPast: Word('мочитились', 5),
  imperativeInformal: Word('мочитись', 5),
  imperativeFormal: Word('мочититесь', 5),
  imperfect: ['помочиться','намочиться'],
};

perfectVerbs.set(мочититься.name.text, мочититься);

export { мочититься };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удаляться: PerfectVerb = {
  name: Word('удаляться', 4),
  singular1stPerson: Word('удаляюсь', 4),
  singular2ndPerson: Word('удаляешься', 4),
  singular3rdPerson: Word('удаляется', 4),
  plural1stPerson: Word('удаляемся', 4),
  plural2ndPerson: Word('удаляетесь', 4),
  plural3rdPerson: Word('удаляются', 4),
  masculinePast: Word('удалялся', 4),
  femininePast: Word('удалялась', 4),
  neuterPast: Word('удалялось', 4),
  pluralPast: Word('удалялись', 4),
  imperativeInformal: Word('удаляйся', 4),
  imperativeFormal: Word('удаляйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(удаляться.name.text, удаляться);

export { удаляться };
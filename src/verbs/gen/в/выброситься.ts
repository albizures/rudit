import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выброситься: PerfectVerb = {
  name: Word('выброситься', 1),
  singular1stPerson: Word('выброшусь', 1),
  singular2ndPerson: Word('выбросишься', 1),
  singular3rdPerson: Word('выбросится', 1),
  plural1stPerson: Word('выбросимся', 1),
  plural2ndPerson: Word('выброситесь', 1),
  plural3rdPerson: Word('выбросятся', 1),
  masculinePast: Word('выбросился', 1),
  femininePast: Word('выбросилась', 1),
  neuterPast: Word('выбросилось', 1),
  pluralPast: Word('выбросились', 1),
  imperativeInformal: Word('выбросись//вы'бросься', 1),
  imperativeFormal: Word('выбросьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выброситься.name.text, выброситься);

export { выброситься };
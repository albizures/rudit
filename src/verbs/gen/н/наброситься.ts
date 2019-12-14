import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наброситься: PerfectVerb = {
  name: Word('наброситься', 4),
  singular1stPerson: Word('наброшусь', 4),
  singular2ndPerson: Word('набросишься', 4),
  singular3rdPerson: Word('набросится', 4),
  plural1stPerson: Word('набросимся', 4),
  plural2ndPerson: Word('наброситесь', 4),
  plural3rdPerson: Word('набросятся', 4),
  masculinePast: Word('набросился', 4),
  femininePast: Word('набросилась', 4),
  neuterPast: Word('набросилось', 4),
  pluralPast: Word('набросились', 4),
  imperativeInformal: Word('набросься', 4),
  imperativeFormal: Word('набросьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наброситься.name.text, наброситься);

export { наброситься };
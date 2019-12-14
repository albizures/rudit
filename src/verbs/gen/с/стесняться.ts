import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стесняться: PerfectVerb = {
  name: Word('стесняться', 5),
  singular1stPerson: Word('стесняюсь', 5),
  singular2ndPerson: Word('стесняешься', 5),
  singular3rdPerson: Word('стесняется', 5),
  plural1stPerson: Word('стесняемся', 5),
  plural2ndPerson: Word('стесняетесь', 5),
  plural3rdPerson: Word('стесняются', 5),
  masculinePast: Word('стеснялся', 5),
  femininePast: Word('стеснялась', 5),
  neuterPast: Word('стеснялось', 5),
  pluralPast: Word('стеснялись', 5),
  imperativeInformal: Word('стесняйся', 5),
  imperativeFormal: Word('стесняйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(стесняться.name.text, стесняться);

export { стесняться };
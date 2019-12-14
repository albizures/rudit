import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постесняться: PerfectVerb = {
  name: Word('постесняться', 7),
  singular1stPerson: Word('постесняюсь', 7),
  singular2ndPerson: Word('постесняешься', 7),
  singular3rdPerson: Word('постесняется', 7),
  plural1stPerson: Word('постесняемся', 7),
  plural2ndPerson: Word('постесняетесь', 7),
  plural3rdPerson: Word('постесняются', 7),
  masculinePast: Word('постеснялся', 7),
  femininePast: Word('постеснялась', 7),
  neuterPast: Word('постеснялось', 7),
  pluralPast: Word('постеснялись', 7),
  imperativeInformal: Word('постесняйся', 7),
  imperativeFormal: Word('постесняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(постесняться.name.text, постесняться);

export { постесняться };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застесняться: PerfectVerb = {
  name: Word('застесняться', 7),
  singular1stPerson: Word('застесняюсь', 7),
  singular2ndPerson: Word('застесняешься', 7),
  singular3rdPerson: Word('застесняется', 7),
  plural1stPerson: Word('застесняемся', 7),
  plural2ndPerson: Word('застесняетесь', 7),
  plural3rdPerson: Word('застесняются', 7),
  masculinePast: Word('застеснялся', 7),
  femininePast: Word('застеснялась', 7),
  neuterPast: Word('застеснялось', 7),
  pluralPast: Word('застеснялись', 7),
  imperativeInformal: Word('застесняйся', 7),
  imperativeFormal: Word('застесняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(застесняться.name.text, застесняться);

export { застесняться };
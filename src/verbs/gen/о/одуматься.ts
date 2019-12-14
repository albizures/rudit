import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одуматься: PerfectVerb = {
  name: Word('одуматься', 2),
  singular1stPerson: Word('одумаюсь', 2),
  singular2ndPerson: Word('одумаешься', 2),
  singular3rdPerson: Word('одумается', 2),
  plural1stPerson: Word('одумаемся', 2),
  plural2ndPerson: Word('одумаетесь', 2),
  plural3rdPerson: Word('одумаются', 2),
  masculinePast: Word('одумался', 2),
  femininePast: Word('одумалась', 2),
  neuterPast: Word('одумалось', 2),
  pluralPast: Word('одумались', 2),
  imperativeInformal: Word('одумайся', 2),
  imperativeFormal: Word('одумайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(одуматься.name.text, одуматься);

export { одуматься };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улечься: PerfectVerb = {
  name: Word('улечься', 2),
  singular1stPerson: Word('улягусь', 2),
  singular2ndPerson: Word('уляжешься', 2),
  singular3rdPerson: Word('уляжется', 2),
  plural1stPerson: Word('уляжемся', 2),
  plural2ndPerson: Word('уляжетесь', 2),
  plural3rdPerson: Word('улягутся', 2),
  masculinePast: Word('улёгся', 5),
  femininePast: Word('улеглась', 5),
  neuterPast: Word('улеглось', 5),
  pluralPast: Word('улеглись', 5),
  imperativeInformal: Word('улягся', 2),
  imperativeFormal: Word('улягтесь', 2),
  imperfect: [],
};

perfectVerbs.set(улечься.name.text, улечься);

export { улечься };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужиматься: PerfectVerb = {
  name: Word('ужиматься', 4),
  singular1stPerson: Word('ужимаюсь', 4),
  singular2ndPerson: Word('ужимаешься', 4),
  singular3rdPerson: Word('ужимается', 4),
  plural1stPerson: Word('ужимаемся', 4),
  plural2ndPerson: Word('ужимаетесь', 4),
  plural3rdPerson: Word('ужимаются', 4),
  masculinePast: Word('ужимался', 4),
  femininePast: Word('ужималась', 4),
  neuterPast: Word('ужималось', 4),
  pluralPast: Word('ужимались', 4),
  imperativeInformal: Word('ужимайся', 4),
  imperativeFormal: Word('ужимайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ужиматься.name.text, ужиматься);

export { ужиматься };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приниматься: PerfectVerb = {
  name: Word('приниматься', 6),
  singular1stPerson: Word('принимаюсь', 6),
  singular2ndPerson: Word('принимаешься', 6),
  singular3rdPerson: Word('принимается', 6),
  plural1stPerson: Word('принимаемся', 6),
  plural2ndPerson: Word('принимаетесь', 6),
  plural3rdPerson: Word('принимаются', 6),
  masculinePast: Word('принимался', 6),
  femininePast: Word('принималась', 6),
  neuterPast: Word('принималось', 6),
  pluralPast: Word('принимались', 6),
  imperativeInformal: Word('принимайся', 6),
  imperativeFormal: Word('принимайтесь', 6),
  imperfect: ['приняться'],
};

perfectVerbs.set(приниматься.name.text, приниматься);

export { приниматься };
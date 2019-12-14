import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позаниматься: PerfectVerb = {
  name: Word('позаниматься', 7),
  singular1stPerson: Word('позанимаюсь', 7),
  singular2ndPerson: Word('позанимаешься', 7),
  singular3rdPerson: Word('позанимается', 7),
  plural1stPerson: Word('позанимаемся', 7),
  plural2ndPerson: Word('позанимаетесь', 7),
  plural3rdPerson: Word('позанимаются', 7),
  masculinePast: Word('позанимался', 7),
  femininePast: Word('позанималась', 7),
  neuterPast: Word('позанималось', 7),
  pluralPast: Word('позанимались', 7),
  imperativeInformal: Word('позанимайся', 7),
  imperativeFormal: Word('позанимайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(позаниматься.name.text, позаниматься);

export { позаниматься };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожиматься: PerfectVerb = {
  name: Word('пожиматься', 5),
  singular1stPerson: Word('пожимаюсь', 5),
  singular2ndPerson: Word('пожимаешься', 5),
  singular3rdPerson: Word('пожимается', 5),
  plural1stPerson: Word('пожимаемся', 5),
  plural2ndPerson: Word('пожимаетесь', 5),
  plural3rdPerson: Word('пожимаются', 5),
  masculinePast: Word('пожимался', 5),
  femininePast: Word('пожималась', 5),
  neuterPast: Word('пожималось', 5),
  pluralPast: Word('пожимались', 5),
  imperativeInformal: Word('пожимайся', 5),
  imperativeFormal: Word('пожимайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(пожиматься.name.text, пожиматься);

export { пожиматься };
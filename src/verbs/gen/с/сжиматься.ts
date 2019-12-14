import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжиматься: PerfectVerb = {
  name: Word('сжиматься', 4),
  singular1stPerson: Word('сжимаюсь', 4),
  singular2ndPerson: Word('сжимаешься', 4),
  singular3rdPerson: Word('сжимается', 4),
  plural1stPerson: Word('сжимаемся', 4),
  plural2ndPerson: Word('сжимаетесь', 4),
  plural3rdPerson: Word('сжимаются', 4),
  masculinePast: Word('сжимался', 4),
  femininePast: Word('сжималась', 4),
  neuterPast: Word('сжималось', 4),
  pluralPast: Word('сжимались', 4),
  imperativeInformal: Word('сжимайся', 4),
  imperativeFormal: Word('сжимайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сжиматься.name.text, сжиматься);

export { сжиматься };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сочетаться: PerfectVerb = {
  name: Word('сочетаться', 5),
  singular1stPerson: Word('сочетаюсь', 5),
  singular2ndPerson: Word('сочетаешься', 5),
  singular3rdPerson: Word('сочетается', 5),
  plural1stPerson: Word('сочетаемся', 5),
  plural2ndPerson: Word('сочетаетесь', 5),
  plural3rdPerson: Word('сочетаются', 5),
  masculinePast: Word('сочетался', 5),
  femininePast: Word('сочеталась', 5),
  neuterPast: Word('сочеталось', 5),
  pluralPast: Word('сочетались', 5),
  imperativeInformal: Word('сочетайся', 5),
  imperativeFormal: Word('сочетайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сочетаться.name.text, сочетаться);

export { сочетаться };
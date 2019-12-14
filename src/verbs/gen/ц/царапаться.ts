import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const царапаться: PerfectVerb = {
  name: Word('царапаться', 3),
  singular1stPerson: Word('царапаюсь', 3),
  singular2ndPerson: Word('царапаешься', 3),
  singular3rdPerson: Word('царапается', 3),
  plural1stPerson: Word('царапаемся', 3),
  plural2ndPerson: Word('царапаетесь', 3),
  plural3rdPerson: Word('царапаются', 3),
  masculinePast: Word('царапался', 3),
  femininePast: Word('царапалась', 3),
  neuterPast: Word('царапалось', 3),
  pluralPast: Word('царапались', 3),
  imperativeInformal: Word('царапайся', 3),
  imperativeFormal: Word('царапайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(царапаться.name.text, царапаться);

export { царапаться };
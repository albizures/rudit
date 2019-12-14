import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмечаться: PerfectVerb = {
  name: Word('отмечаться', 5),
  singular1stPerson: Word('отмечаюсь', 5),
  singular2ndPerson: Word('отмечаешься', 5),
  singular3rdPerson: Word('отмечается', 5),
  plural1stPerson: Word('отмечаемся', 5),
  plural2ndPerson: Word('отмечаетесь', 5),
  plural3rdPerson: Word('отмечаются', 5),
  masculinePast: Word('отмечался', 5),
  femininePast: Word('отмечалась', 5),
  neuterPast: Word('отмечалось', 5),
  pluralPast: Word('отмечались', 5),
  imperativeInformal: Word('отмечайся', 5),
  imperativeFormal: Word('отмечайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отмечаться.name.text, отмечаться);

export { отмечаться };
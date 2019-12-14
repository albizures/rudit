import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отображаться: PerfectVerb = {
  name: Word('отображаться', 7),
  singular1stPerson: Word('отображаюсь', 7),
  singular2ndPerson: Word('отображаешься', 7),
  singular3rdPerson: Word('отображается', 7),
  plural1stPerson: Word('отображаемся', 7),
  plural2ndPerson: Word('отображаетесь', 7),
  plural3rdPerson: Word('отображаются', 7),
  masculinePast: Word('отображался', 7),
  femininePast: Word('отображалась', 7),
  neuterPast: Word('отображалось', 7),
  pluralPast: Word('отображались', 7),
  imperativeInformal: Word('отображайся', 7),
  imperativeFormal: Word('отображайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(отображаться.name.text, отображаться);

export { отображаться };
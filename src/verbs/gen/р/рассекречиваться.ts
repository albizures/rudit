import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассекречиваться: PerfectVerb = {
  name: Word('рассекречиваться', 7),
  singular1stPerson: Word('рассекречиваюсь', 7),
  singular2ndPerson: Word('рассекречиваешься', 7),
  singular3rdPerson: Word('рассекречивается', 7),
  plural1stPerson: Word('рассекречиваемся', 7),
  plural2ndPerson: Word('рассекречиваетесь', 7),
  plural3rdPerson: Word('рассекречиваются', 7),
  masculinePast: Word('рассекречивался', 7),
  femininePast: Word('рассекречивалась', 7),
  neuterPast: Word('рассекречивалось', 7),
  pluralPast: Word('рассекречивались', 7),
  imperativeInformal: Word('рассекречивайся', 7),
  imperativeFormal: Word('рассекречивайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(рассекречиваться.name.text, рассекречиваться);

export { рассекречиваться };